const commentsData = [
    {
        name: "Aryan",
        text: "The web-site is well built",
        replies: [
            {
                name: "Ajay",
                text: "Yes, you are absolutely right",
                replies: [
                    {
                        name: "Mansi",
                        text: "Even Shimmer UIs are implemented with such beauty",
                        replies: [
                            {
                                name: "Rohan",
                                text: "I love how responsive it is on different devices.",
                                replies: [
                                    {
                                        name: "Alisha",
                                        text: "Absolutely! The responsiveness is a game-changer.",
                                        replies: [
                                            {
                                                name: "Suresh",
                                                text: "The memorization technique for saving API calls is quite efficient.",
                                                replies: [
                                                    {
                                                        name: "Anita",
                                                        text: "Totally agree! It enhances the overall performance.",
                                                        replies: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: "Rohan",
                                        text: "And the dark theme adds a touch of elegance.",
                                        replies: [
                                            {
                                                name: "Priya",
                                                text: "Dark theme is my favorite! It's so easy on the eyes.",
                                                replies: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Shivani",
        text: "Lorem33",
        replies: [
            {
                name: "Karan",
                text: "I noticed the debouncing in the comment input. Smart move!",
                replies: [
                    {
                        name: "Shivani",
                        text: "Thanks! It helps in preventing unnecessary API calls.",
                        replies: [
                            {
                                name: "Anjali",
                                text: "The Shimmer UI effect while loading is a nice touch.",
                                replies: [
                                    {
                                        name: "Karan",
                                        text: "Absolutely! It gives a smooth transition.",
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const additionalCommentsData = [
    {
        name: "Samantha",
        text: "The website's color scheme is pleasing to the eyes.",
        replies: [
            {
                name: "Charlie",
                text: "Agreed! Especially with the dark theme, it looks so sleek.",
                replies: []
            }
        ]
    },
    {
        name: "Vivek",
        text: "I appreciate the effort put into implementing debouncing.",
        replies: [
            {
                name: "Priyanka",
                text: "Debouncing is a great optimization technique for user interactions.",
                replies: [
                    {
                        name: "Vivek",
                        text: "Absolutely! It keeps the UI responsive without overloading the server.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Elena",
        text: "The nested comments feature is user-friendly.",
        replies: []
    }
];

export const allCommentsData = [...commentsData, ...additionalCommentsData];
