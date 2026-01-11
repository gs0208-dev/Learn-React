import Groq from 'groq-sdk';


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY, // Changed to Vite format for your local setup
    dangerouslyAllowBrowser: true,
});

export async function getRecipeFromGroq(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    const msg = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", // Use a Groq supported model
        max_tokens: 1024,
        messages: [
            { role: "system", content: SYSTEM_PROMPT }, // Groq puts system prompt here
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });

    return msg.choices[0].message.content; // The path to the text is different
}
