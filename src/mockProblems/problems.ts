export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "",
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "xty7fr-k0TU",
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "ZfFl4torNg4",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		videoId: "",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "4qYTqOiRMoM",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		videoId: "",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
	},
];


interface Example {
    id: number;
    inputText: string;
    outputText: string;
    explanation: string;
    img?: string;
}

interface Problem2 {
    title: string;
    problemStatement: string;
    examples: Example[];
    constraints: string;
}

export const problem: Problem2 = {
    title: "1. Two Sum",
    problemStatement: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iure praesentium eveniet blanditiis corrupti, temporibus doloremque explicabo rem vero impedit ipsam incidunt delectus neque amet molestias corporis quis accusantium pariatur officia itaque repudiandae dolorum sed eos modi. Dignissimos dicta quas autem iste officiis cumque numquam, ipsa eos illo, architecto sed.",
    examples: [
        {
            id: 1,
            inputText: "input 1",
            outputText: "output 1",
            explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique assumenda est minima consequatur ex.",
        },
        {
            id: 2,
            inputText: "input 1",
            outputText: "output 1",
            explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique assumenda est minima consequatur ex.",
        },
    ],
    constraints: "this is constraints",
};
