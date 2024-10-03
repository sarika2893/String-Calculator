import { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const NewCompo = () => {

    const [inputValue, setInputValue] = useState("")
    const [numberList, findSum] = useState();
    const [showResult, setShowResult] = useState(false);

    const findNumbers = () => {
        const numbers = inputValue.match(/-?\d+(\.\d+)?/g);                      //(/\b\d+\b/g);
        console.log("inputValue=========", numbers);
        setShowResult(true);
        if (numbers) {
            const sumWithNumbers = numbers.reduce((element, current) => {
                console.log("element, current", element, current);

                if (element.shouldStop) {
                    return element;
                }
                if (current < 0) {
                    element.shouldStop = true;
                    element.sum = `Negative Numbers Not Allowed`
                } else if (current > 1000) {
                    return element;
                } else {
                    element.sum += parseFloat(current);
                }
                return element;
            }, { sum: 0, shouldStop: false });

            findSum(sumWithNumbers);
            console.log("sumWithNumbers=======", sumWithNumbers);
        } else {
            findSum({ sum: 0, shouldStop: false });
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setShowResult(false);
    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '40px' }}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    String Calculator TDD Kata
                </Typography>
                <Box mb={2}>
                    <TextField
                        label="Enter text here"
                        autoComplete="off"
                        variant="outlined"
                        value={inputValue}
                        onChange={handleInputChange}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <SendIcon style={{ marginRight: '8px' }} />
                            ),
                        }}
                        style={{
                            borderRadius: '10px',
                        }}
                    />
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={findNumbers}
                    fullWidth
                    startIcon={<SendIcon />}
                    disabled={!inputValue} // Disable if input is empty
                    style={{
                        borderRadius: '10px',
                        padding: '10px',
                    }}
                >
                    Submit
                </Button>
                {/* <Box component="span" sx={{ display: 'block' }}>{numberList?.sum}</Box> */}
                {inputValue && showResult && (
                    <Box mt={3} textAlign="center">
                        <Typography variant="h6">
                            Your Sum: <strong>{numberList?.sum}</strong>
                        </Typography>
                    </Box>)}
            </Paper>
        </Container>
    );
}

export default NewCompo;