"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""
from random import randint
# from my_solution import mountain_scape

TESTS = {
    "Basics": [
        {
            "input": [[[0, 2], [3, 3]], 2],
            "answer": 3,
            "explanation": [0]
        },
        {
            "input": [[[1, 3], [6, 5], [13, 4]], 3],
            "answer": 7,
            "explanation": [1]
        },
        {
            "input": [[[1, 2], [5, 6], [13, 3]], 3],
            "answer": 6,
            "explanation": [0, 2]
        },
        {
            "input": [[[0, 2], [3, 3], [8, 2], [11, 3]], 3],
            "answer": 6,
            "explanation": [0, 2]
        },
        {
            "input": [[[0, 5]], 7],
            "answer": 5,
            "explanation": []
        },
        {
            "input": [[[0, 4], [5, 3], [10, 2], [15, 1], [17, 5]], 1],
            "answer": 15,
            "explanation": []
        },
        {
            "input": [[[4, 2], [7, 4], [14, 5], [23, 6], [31, 5], [37, 5], [47, 6], [55, 4]], 3],
            "answer": 26,
            "explanation": [0, 4, 7]
        },
        {
            "input": [[[2, 8], [10, 4], [14, 10], [25, 7], [33, 2], [36, 1], [38, 1], [39, 3], [44, 4], [50, 9]], 2],
            "answer": 36,
            "explanation": [1, 3, 5, 6]
        },
    ],
}
