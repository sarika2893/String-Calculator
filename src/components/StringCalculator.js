import { useState } from "react";
import { TextField, Button, Container, Typography } from '@mui/material';

const StringCalculator = () => {

    const [inputValue, setInputValue] = useState("")
    const [numberList, findSum] = useState();

    const findNumbers = () => {
        const numbers = inputValue.match(/-?\d+(\.\d+)?/g);                      //(/\b\d+\b/g);
        if (numbers) {
            const sumWithNumbers = numbers.reduce((element, current) => {
                if (element.shouldStop) {
                    return element;
                }
                if (current < 0) {
                    element.shouldStop = true;
                    element.sum = `negatives Not allowed`
                } else {
                    element.sum += parseFloat(current);
                }
                return element;
            }, { sum: 0, shouldStop: false });

            findSum(sumWithNumbers);
        } else {
            findSum(0)
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Find Sum
            </Typography>
            <TextField
                label="Enter something"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                fullWidth
                style={{ marginBottom: '20px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={findNumbers}
                disabled={!inputValue} // Disable if input is empty
            >
                Submit
            </Button>
        </Container>
    );
}

export default StringCalculator;