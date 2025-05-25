---
sidebar_position: 3
---

# Rate Limiting

Proxana provides a powerful rate limiting feature that allows you to control the number of requests your application can make to the OpenAI API. This is particularly useful for managing costs and ensuring fair usage among users.

### Different types of "requests"

In Proxana, requests can be categorized into different types based on their authentication status and group membership. This allows you to apply different rate limits to different user types:
- **Authenticated request**: Has a **user identifier** (e.g., `sub` value in **JWT**, or `X-User-Id` value in **Header**)
- **Authorized request**: Has a **group identifier** matching a defined group from the **group rate limit rules**. (e.g., `pro`, `premium`, etc.)
- **Anonymous request**: Does not have a user identifier or group identifier. This includes requests made by unauthenticated users.

:::note Note
 **Authorized** requests are a subset of **Authenticated** requests, meaning that all authorized requests are also authenticated, <ins>**but not all**</ins> authenticated requests are authorized.
:::

Here's a matrix to help you understand which rate limit rules apply to each type of request:
| Rate Limit Type | Authenticated | Authorized              | Anonymous | Notes |
|-----------------|:-------------:|:-----------------------:|:---------:|-------|
| 🌐 Global       | ✅             | ✅                      | ✅        | Applies at the proxy-level |
| 🫥 Anonymous    | ✅             | ✅<sup>*</sup> / 🚫     | ✅        |       |
| 👥 Group        | ✅             | ✅                      | 🚫        |       |

\* Authorized requests are treated as anonymous if no group rule is defined for the group. In this case, they will be subject to the anonymous rate limit.

Here's a matrix to help you understand how a request is categorized based on its authentication status and group membership:
| Request Type    | User Identifier | Group Identifier  |
|-----------------|:---------------:|:-----------------:|
| Authenticated   | ✅               | 🚫                |
| Authorized      | ✅               | ✅                |
| Anonymous       | ✅               | ⚠️                |
| Anonymous       | 🚫               | 🚫                |

Legend:
- ✅: Has the identifier
- 🚫: Does not have the identifier
- ⚠️: Has the identifier, but not defined in the rate limit rules


### Different types of rate-limite rules

Proxana supports several types of rate-limiting rules, which can be applied to your proxy:
#### 1. Global Rate Limit:

    This rule applies to **all** requests made through the proxy, regardless of the user or group. 
    
    It is useful for setting a maximum number of requests per hour, day, week, or month for the entire application. This helps prevent abuse and manage costs effectively.

#### 2. Anonymous Rate Limit:

    This rule applies to requests made by users who are not authenticated or do not belong to any of the defined user groups.
    
    It is useful for limiting the number of requests from unauthenticated users, ensuring that they do not overwhelm the API or consume excessive resources.
    
    :::warning Warning
    If disabled, requests from unauthenticated users will not be allowed.
    :::

#### 3. Group Rate Limit:

    This rule applies to requests made by users belonging to a specific group. Or all users if no group is specified.
    
    It allows you to set different rate limits for different user groups, enabling you to prioritize certain users or features.
    
    For example, let's say we have three user groups: `free`, `pro`, and `premium`. You can set different rate limits for each group as follows:
        - **Group**: `*`
            - **Limit**: _10_ **req/day**
        - **Group**: `pro`
            - **Limit**: _100_ **req/day**
        - **Group**: `premium`
            - **Limit**: _1000_ **req/day**
    
    <br />
    :::info Info
    Users who do not belong to any group will be treated as anonymous users and subject to the anonymous rate limit. Unless the catch-all group `*` is defined, which will apply to all users not in any other group.
    :::

    In the above example, users in the `pro` group can make 100 requests per day, while users in the `premium` group can make 1000 requests per day. All other users (including `free`) will be limited to 10 requests per day.

## How to set up rate limiting

### Prerequisites
Before you start, make sure you have the following:
- A proxy set up in Proxana. (See [Connecting to OpenAI](../integration-guides/connect-openai.md) for an example.)
- **Identify your users** is enabled in your proxy settings. This is necessary for group rate limiting to work. (See [Authenticate Users](../features/user-identification.md) for more details.)

### Set up Rate Limiting
1. **View Your Proxy**:
    - Go to the Proxana dashboard and click on the proxy you want to edit.
    - Under the **Security** section, enable **Rate Limiting**.
2. **Edit Your Proxy**:
    - Enable the type of rate limiting you want to enforce.
    - For **Global Rate Limit**, enter the maximum number of requests allowed per hour, day, week, or month.
    - For **Anonymous Rate Limit**, enter the maximum number of requests allowed per hour, day, week, or month for anonymous requests.
    - For **Group Rate Limit**, enter the group identifier you want to apply the rate limit to and enter the maximum number of requests allowed per hour, day, week, or month for that group. You can add multiple groups with different limits. You can also use `*` as a catch-all group to apply the rate limit to all users not in any other group.
    - Click **Save** to update your proxy configuration.