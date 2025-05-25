---
sidebar_position: 2
---

# Authenticate Users

There are a couple of ways to authenticate your application users with Proxana. The most common authentication method is to use a JWT (JSON Web Token) that is signed with a secret key. This allows you to verify the identity of the user without exposing any sensitive information.

### Prerequisites
Before you start, make sure you have the following:
- A proxy set up in Proxana. (See [Connecting to OpenAI](../integration-guides/connect-openai.md) for an example.)
- If using JWT:
    - An existing authentication system in your application that can issue JWTs. (i.e., using auth providers like Auth0 or your own custom implementation.)
    - A `/.well-known/jwks.json` endpoint that serves the public keys for JWT verification. (Auth0 provides this automatically)

## JWT (JSON Web Token)

To authenticate users with JWT, you can follow these steps:

1. **View Your Proxy**:
    - Go to the Proxana dashboard and click on the proxy you want to edit.
    - Under the **Security** section, enable **Identify your users**.

2. **Edit Your Proxy**:
    - Select **JWT** as the placement for the user identifier.
    - For the **User Claim Key** field, enter the claim key that contains the user identifier in your JWT. This is typically `sub` (subject) or `user_id`, depending on your authentication system.
    - (Optional) For the **Group Claim Key** field, enter the claim key that contains the user group or role information. This can be used for authorization purposes.
        - If your group claim is an array, you can toggle the **As a list** option to treat it as a list of groups.
    - For the **Issuer** field, enter the issuer URL of your JWT. This is typically the base URL of your authentication provider (e.g., `https://your-auth-provider.com`). The URL should expose the public keys for JWT verification at `/.well-known/jwks.json`.
    - Click **Save** to update your proxy configuration.

You simply need to include the JWT in the `Authorization` header of your requests to the Proxana proxy and Proxana will automatically verify the JWT and extract the user identifier and group information based on your configuration.

```json title="JWT Payload Example"
{
  "sub": "user123",
  "groups": ["admin", "editor"],
  "iss": "https://your-auth-provider.com",
  "iat": 1700000000,
  "exp": 1700003600
}
```

## Header

If you're not using JWT, you can also authenticate users by passing a user identifier in the request headers. This is useful for simpler applications or when you don't have a JWT-based authentication system.

:::danger Warning
This method is less secure than using JWTs, as it does not provide the same level of verification and integrity.
:::

1. **View Your Proxy**:
    - Go to the Proxana dashboard and click on the proxy you want to edit.
    - Under the **Security** section, enable **Identify your users**.

2. **Edit Your Proxy**:
    - Select **Header** as the placement for the user identifier.
    - For the **User Identifier** field, enter the name of the header that will contain the user identifier. This could be something like `X-User-ID` or `X-Auth-User`.
    - (Optional) For the **Group Identifier** field, enter the name of the header that will contain the user group or role information. This can be used for authorization purposes. This could be something like `X-User-Group` or `X-Auth-Group`.
    - Click **Save** to update your proxy configuration.

Now, when you make requests to the Proxana proxy, you can include the user identifier in the specified header. Proxana will automatically extract the user identifier and group information based on your configuration.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
// Example of making a request with user identifier in headers
fetch('https://my-proxy123abc.proxana.dev/api/data', {
    method: 'GET',
    headers: {
        'X-User-ID': 'user123', // Replace with actual user ID
        'X-User-Group': 'admin' // Optional, replace with actual user group
    }
})
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

# Example of making a request with user identifier in headers
response = requests.get(
    'https://my-proxy123abc.proxana.dev/api/data',
    headers={
        'X-User-ID': 'user123',  # Replace with actual user ID
        'X-User-Group': 'admin'  # Optional, replace with actual user group
    }
)
```

</TabItem>
<TabItem value="dart" label="Dart">

```dart
import 'package:http/http.dart' as http;

// Example of making a request with user identifier in headers
final response = await http.get(
  Uri.parse('https://my-proxy123abc.proxana.dev/api/data'),
  headers: {
    'X-User-ID': 'user123', // Replace with actual user ID
    'X-User-Group': 'admin' // Optional, replace with actual user group
  },
);
```

</TabItem>
</Tabs>