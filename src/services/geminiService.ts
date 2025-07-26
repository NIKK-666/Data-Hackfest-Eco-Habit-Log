import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI with the provided API key
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Use Gemini 1.5 Flash model for fast responses
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateEcoTip = async (completedHabits: string[] = []): Promise<string> => {
  try {
    const habitContext = completedHabits.length > 0 
      ? `The user has completed these eco-habits today: ${completedHabits.join(', ')}.` 
      : 'The user is looking for eco-friendly suggestions.';

    const prompt = `${habitContext} 

Generate a single, specific, and actionable eco-friendly tip for daily life. The tip should be:
- Under 50 words
- Practical and easy to implement
- Related to sustainability, environmental protection, or green living
- Encouraging and positive in tone
- Different from common advice about recycling, walking, or saving electricity

Examples of good tips:
- "Try the 5-minute rule: turn off lights when leaving a room for more than 5 minutes"
- "Use cold water for washing clothes - it's just as effective and saves 90% of the energy"
- "Keep a reusable cup at work to avoid disposable coffee cups throughout the day"

Generate one unique tip now:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text.trim();
  } catch (error) {
    console.error('Error generating eco tip:', error);
    
    // Fallback tips if API fails
    const fallbackTips = [
      "Try using a reusable water bottle today - you'll save money and reduce plastic waste!",
      "Consider walking or biking for trips under 2 miles. Your body and the planet will thank you!",
      "Unplug electronics when not in use. This simple habit can reduce your energy bill by 10%.",
      "Choose one plant-based meal today. It's a delicious way to lower your carbon footprint!",
      "Bring reusable bags on your next shopping trip - many stores offer discounts for eco-friendly shoppers!",
    ];
    
    return fallbackTips[Math.floor(Math.random() * fallbackTips.length)];
  }
};

export const chatWithEcoAssistant = async (message: string, chatHistory: Array<{role: 'user' | 'assistant', content: string}> = []): Promise<string> => {
  try {
    const systemPrompt = `You are EcoBot, a friendly and knowledgeable AI assistant focused on environmental sustainability and eco-friendly living. 

Your personality:
- Enthusiastic about environmental protection
- Practical and solution-oriented
- Encouraging and positive
- Educational but not preachy

Guidelines:
- Keep responses under 150 words
- Provide actionable, practical advice
- Use a friendly, conversational tone
- Include specific examples when helpful
- Focus on sustainability, green living, climate action, and environmental topics
- If asked about non-environmental topics, gently redirect to eco-friendly aspects

Current context: You're helping users track their daily eco habits and live more sustainably.`;

    // Convert chat history to Gemini format
    const conversationHistory = chatHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Add system context and current message
    const prompt = `${systemPrompt}\n\nUser message: ${message}`;
    
    const result = await model.generateContent({
      contents: [
        ...conversationHistory,
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ]
    });
    
    const response = await result.response;
    const text = response.text();
    
    return text.trim();
  } catch (error) {
    console.error('Error in chat conversation:', error);
    return "Sorry, I'm having trouble connecting right now. Try asking me about eco-friendly tips, sustainable living, or environmental topics!";
  }
};
