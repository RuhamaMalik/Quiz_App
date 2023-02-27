import React, { useState } from 'react';
import { Box, Button, Center, Container, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import questions from './Questions';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [marks, setMarks] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);

    // handle the selection of an answer
    const handleAnswerClick = (isCorrect) => {

        //update Score
        isCorrect ? setMarks(marks + 1) : setMarks(marks)

        const nextQuestion = currentQuestion + 1;

        // move to neXt Question
        nextQuestion < questions.length ?
            setCurrentQuestion(nextQuestion) :
            // end of quiz
            setIsQuizEnd(true);


    }

    // handle restarting the quiz
    const handleRestartClick = () => {
        setCurrentQuestion(0);
        setMarks(0);
        setIsQuizEnd(false);
    };

    return (
        <Flex
            align="center"
            justify="center"
            h="100vh">
            <Center
                bg='rgba(255, 255, 255, 0.425)'
                maxW='2xl'
                h='60vh'
                p={4}
                color='black'
               >
                {isQuizEnd ? (
                    <Box
                        maxW="600px"
                        w="100vw" >
                        <h1>Quiz end!</h1>
                        <h3>Your Marks: {marks}</h3>
                        <Button
                        bg="black"
                        color="whiteSmoke"
                        border='none'
                        borderRadius="20px"
                        boxShadow="inset -5px -5px 12px #d9d7d2"
                        fontSize="lg"
                        _hover={{ bg: "grey" }}

                        size='lg'
                        height='48px'
                        width='200px'
                        onClick={handleRestartClick}>
                            Restart Quiz
                        </Button>
                    </Box>
                ) : (
                    <Flex
                    justify="space-around"
                    direction="column"
                    h="100%"
                    w="100%"
               >
                        <h1>{questions[currentQuestion].questionText}</h1>
                        <SimpleGrid
                    justifyItems="center"
                        columns={2}
                        minChildWidth='220px' spacing='20px'
                        maxW="600px"
                        w="100vw"
                  
                            >
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <Button 
                                    bg="black"
                                    color="whiteSmoke"
                                    border='none'
                                    borderRadius="20px"
                                    boxShadow="inset -5px -5px 12px #d9d7d2"
                                    fontSize="lg"
                                    _hover={{ bg: "grey" }}
                                    size='lg'
                                    height='48px'
                                    width='200px'
                                    key={index}
                                    onClick={() => handleAnswerClick(answerOption.isCorrect)} >
                                    {answerOption.answerText}
                                </Button>
                            ))}
                        </SimpleGrid>
                    </Flex>
                )}
            </Center>

        </Flex >
    );
}

export default Quiz;