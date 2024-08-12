import axios from 'axios';

export default async function handler(req, res) {
  const shopifyUrl = process.env.SHOPIFY_STORE_URL;
  const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

  try {
    const response = await axios.get(`https://${shopifyUrl}/admin/api/2023-01/products.json`, {
      headers: {
        'X-Shopify-Access-Token': accessToken,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
