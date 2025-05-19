import axios from 'axios';

interface DeepSeekResponse {
  choices: { message: { content: string } }[];
}

export async function getGeoDescription(cityName: string, amapInfo: any) {
  const apiKey = 'sk-***************************';
  const prompt = `请用简明的语言介绍${cityName}的地理特征，参考以下信息：${JSON.stringify(amapInfo)}`;
  const res = await axios.post(
    'https://api.deepseek.com/v1/chat/completions',
    {
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: { Authorization: `Bearer ${apiKey}` },
    }
  );
  const data = res.data as DeepSeekResponse;
  return data.choices[0].message.content;
}
