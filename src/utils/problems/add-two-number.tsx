import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeAddTwoNumbers = `function addTwoNumbers(a, b){
    // Write your code here
};`;

// checks if the user has the correct code
const handlerAddTwoNumbers = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const nums = [
            [2, 3],
            [5, 7],
            [-1, -1],
        ];

        const answers = [5, 12, -2];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < nums.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(nums[i][0], nums[i][1]);
            assert.strictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("addTwoNumbers handler function error");
        throw new Error(error);
    }
};

export const add2Number: Problem = {
    id: "add-two-number",
    title: "6. Add Two Numbers",
    problemStatement: `<p class='mt-3'>
        Given two numbers <code>a</code> and <code>b</code>, return
        <em>their sum</em>.
        </p>`
    ,
    examples: [
        {
            id: 1,
            inputText: "a=2, b=3",
            outputText: "5",
            explanation: "Addition of 2 and 3 is 5",
        },
        {
            id: 2,
            inputText: "a=5, b=7",
            outputText: "12",
            explanation: "Addition of 5 and 7 is 12",
        },
        {
            id: 3,
            inputText: "a=-1, b=-1",
            outputText: "-2",
            explanation: "Addition of -1 and -1 is -2",
        },
    ],
    constraints: `<li class='mt-2'>
        <code>-1000 ≤ a, b ≤ 1000</code>
        </li>`,
    handlerFunction: handlerAddTwoNumbers,
    starterCode: starterCodeAddTwoNumbers,
    order: 6,
    starterFunctionName: "function addTwoNumbers(",
};
