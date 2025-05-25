# FAQs

<details>
  <summary>What is Proxana for?</summary>

Proxana is a tool designed to help you securely use third-party services that require authentication, such as OpenAI, Gemini, Stripe, and others without exposing your API keys or credentials in the frontend code. It acts as a proxy server that handles authentication and API requests on your behalf, ensuring that sensitive information remains secure.
</details>

<details>
  <summary>How does Proxana work?</summary>

Proxana works by acting as an intermediary between your application and the third-party service. When you set up a proxy in Proxana, you provide the necessary authentication details (like API keys) and configure the proxy to handle requests. When your application makes a request to the third-party service, it goes through Proxana, which authenticates the request and forwards it to the service. The response is then sent back to your application through Proxana.

This setup addresses several security concerns:
1. **API Key Exposure**: Proxana keeps your API keys secure by not exposing them in your frontend code.
2. **User Authentication**: Proxana can authenticate users using JWTs or headers, allowing you to identify and manage user access securely.
3. **Rate Limiting**: Proxana can enforce rate limits on API requests, helping to prevent abuse and manage costs effectively.
</details>

<details>
  <summary>What if someone uses my Proxana endpoint?</summary>

We have multiple security measures in place to prevent unauthorized access to your Proxana endpoints:

1. Your Proxana endpoints can be protected with **authentication** methods like JWT or headers, ensuring that only authenticated users can access them.
2. Proxana supports **rate limiting**, which helps prevent abuse by limiting the number of requests a user can make within a specified time frame.
</details>

<details>
  <summary>Why not just use Firebase/Supabase functions?</summary>

Firebase and Supabase functions are great for many use cases, but they don't come with authentication and rate limiting out of the box.

Proxana provides a more tailored solution for securely handling third-party API requests, with no need to write custom backend code. It allows you to focus on your frontend application while Proxana manages the security and authentication aspects for you.
</details>

<details>
  <summary>How does Proxana handle scaling?</summary>

  Proxana is deployed on Google Cloud Run, which automatically scales based on the number of requests.
  
  This means that as your application grows and requires more resources, Proxana can handle the increased load without manual intervention.

</details>

<details>
  <summary>How do I integrate in my app?</summary>

  Integrating Proxana into your application is straightforward. It's as simple as swapping your API endpoint with the Proxana endpoint. And then you can use the Proxana proxy to make requests the same way you would with any other API.

  For example, if you have an API endpoint like `api.example.com/data`, you would replace it with your Proxana endpoint, such as `my-proxy123abc.proxana.dev/data`.

</details>