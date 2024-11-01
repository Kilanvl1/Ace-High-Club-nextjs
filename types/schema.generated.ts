/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/groups/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["groups_list"];
        put?: never;
        post: operations["groups_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["groups_retrieve"];
        put: operations["groups_update"];
        post?: never;
        delete: operations["groups_destroy"];
        options?: never;
        head?: never;
        patch: operations["groups_partial_update"];
        trace?: never;
    };
    "/token/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Takes a set of user credentials and returns an access and refresh JSON web
         *     token pair to prove the authentication of those credentials. */
        post: operations["token_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/token/refresh/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Takes a refresh type JSON web token and returns an access type JSON web
         *     token if the refresh token is valid. */
        post: operations["token_refresh_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["users_list"];
        put?: never;
        post: operations["users_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["users_retrieve"];
        put: operations["users_update"];
        post?: never;
        delete: operations["users_destroy"];
        options?: never;
        head?: never;
        patch: operations["users_partial_update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CustomUser: {
            readonly id: number;
            /** Format: email */
            email: string;
            username: string;
        };
        CustomUserRequest: {
            password: string;
            /** Format: email */
            email: string;
            username: string;
        };
        Group: {
            readonly id: number;
            /** @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
            readonly creator: string;
            /** Format: uri */
            group_photo?: string;
            name: string;
            members?: (number | null)[];
        };
        GroupRequest: {
            /** Format: binary */
            group_photo?: string;
            name: string;
            members?: (number | null)[];
        };
        PatchedCustomUserRequest: {
            password?: string;
            /** Format: email */
            email?: string;
            username?: string;
        };
        PatchedGroupRequest: {
            /** Format: binary */
            group_photo?: string;
            name?: string;
            members?: (number | null)[];
        };
        TokenObtainPair: {
            readonly access: string;
            readonly refresh: string;
        };
        TokenObtainPairRequest: {
            username: string;
            password: string;
        };
        TokenRefresh: {
            readonly access: string;
        };
        TokenRefreshRequest: {
            refresh: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    groups_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"][];
                };
            };
        };
    };
    groups_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["GroupRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["GroupRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };
        };
    };
    groups_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this group. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };
        };
    };
    groups_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this group. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["GroupRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["GroupRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };
        };
    };
    groups_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this group. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    groups_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this group. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["PatchedGroupRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["PatchedGroupRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };
        };
    };
    token_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TokenObtainPairRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["TokenObtainPairRequest"];
                "multipart/form-data": components["schemas"]["TokenObtainPairRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenObtainPair"];
                };
            };
        };
    };
    token_refresh_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TokenRefreshRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["TokenRefreshRequest"];
                "multipart/form-data": components["schemas"]["TokenRefreshRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenRefresh"];
                };
            };
        };
    };
    users_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomUser"][];
                };
            };
        };
    };
    users_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomUserRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["CustomUserRequest"];
                "multipart/form-data": components["schemas"]["CustomUserRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomUser"];
                };
            };
        };
    };
    users_retrieve: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this user. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomUser"];
                };
            };
        };
    };
    users_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this user. */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomUserRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["CustomUserRequest"];
                "multipart/form-data": components["schemas"]["CustomUserRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomUser"];
                };
            };
        };
    };
    users_destroy: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this user. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No response body */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    users_partial_update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this user. */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PatchedCustomUserRequest"];
                "application/x-www-form-urlencoded": components["schemas"]["PatchedCustomUserRequest"];
                "multipart/form-data": components["schemas"]["PatchedCustomUserRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomUser"];
                };
            };
        };
    };
}
