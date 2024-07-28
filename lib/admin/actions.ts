export const getAllPaystackTransaction = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_PAYSTACK_TRANSACTIONS;
      if (!apiUrl) {
        throw new Error('API route is not defined in environment variables');
      }
  
      const res = await fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_PRIVATE_TOKEN_KEY}`
        },
        next: { revalidate: 30 } });
      if (!res.ok) {
        throw new Error(`Error fetching paystack transactions : ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      // console.log(data?.data);/
      return data.data;
    } catch (error: any) {
      console.error(`Error getting paystack data: ${error.message}`);
      return [];
    }
  };