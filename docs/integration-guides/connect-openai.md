---
sidebar_position: 1
---

# Connect to OpenAI

To get started with Proxana, you need to create a proxy that targets the OpenAI API. This will allow you to securely authenticate and make requests to OpenAI without exposing your API key in your code.


## Steps
You can follow these steps to set up your proxy:

1. **Create a Proxy**:
    - Go to the [Proxana dashboard](https://proxana.dev), under the **Proxies** section.
    - Click on **Create Proxy** and enter a name for your proxy, such as `openai-proxy`.
    - Set the target URL to `https://api.openai.com` which is the base URL for OpenAI's API.
    - Click **Next** to proceed to the next step.

2. **Configure Key Placement**:
    - Select **Header** as the place for placing your API key.
    - Enter `Authorization` as the header name.
    - Enter `Bearer ` as the prefix for the header value.
    - Click **Next** to continue.

3. **Add a Secret**:
    - Choose an existing secret or create a new one to store your OpenAI API key.
    - If creating a new secret, enter a name like `OpenAIKey` and paste your OpenAI API key into the value field.
    - Click **Finish** to create your proxy.

You now have a proxy set up that will handle authentication for OpenAI requests!

4. **Use the Proxy in Your Application**:
    - In the details page of your proxy, you will find the proxy URL. This is the URL you will use in your application to make requests to OpenAI.
    - For example, your proxy URL might look like `https://openai-proxy123abc.proxana.dev`.
    - Use this URL in your application to make requests to OpenAI's API. Proxana will automatically handle the authentication using the API key stored in your secret.

You can now make requests to OpenAI's API through your Proxana proxy without exposing your API key in your code. 

:::tip Note
The paths and parameters for the OpenAI API remain the same, so you can use the same endpoints as you would normally, just with the Proxana proxy URL instead of the OpenAI base URL.
:::

## OpenAI Proxy Template

Proxana provides a library of pre-configured proxy **templates** that you can use to quickly set up a proxy.

You can find the **OpenAI** proxy template in the [Proxana dashboard](https://proxana.dev) when creating a new proxy. This template includes all the necessary configurations to connect to **OpenAI**'s API. You just need to provide your **OpenAI** API key, and the template will handle the rest.

You can use this template to create a proxy in just a few clicks, without having to manually configure each setting.