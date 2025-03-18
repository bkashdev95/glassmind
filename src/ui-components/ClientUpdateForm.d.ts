/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Client } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientUpdateFormInputValues = {
    created_at?: number;
    name?: string;
    birthdate?: string;
    status?: string;
    email?: string;
    password?: string;
    phone?: string;
};
export declare type ClientUpdateFormValidationValues = {
    created_at?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientUpdateFormOverridesProps = {
    ClientUpdateFormGrid?: FormProps<GridProps>;
    created_at?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    birthdate?: FormProps<TextFieldProps>;
    status?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
    phone?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    client?: Client;
    onSubmit?: (fields: ClientUpdateFormInputValues) => ClientUpdateFormInputValues;
    onSuccess?: (fields: ClientUpdateFormInputValues) => void;
    onError?: (fields: ClientUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ClientUpdateFormInputValues) => ClientUpdateFormInputValues;
    onValidate?: ClientUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientUpdateForm(props: ClientUpdateFormProps): React.ReactElement;
