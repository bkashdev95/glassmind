/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Client } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ClientUpdateForm(props) {
  const {
    id,
    client,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    created_at: undefined,
    name: undefined,
    birthdate: undefined,
    status: undefined,
    email: undefined,
    password: undefined,
    phone: undefined,
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [name, setName] = React.useState(initialValues.name);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [status, setStatus] = React.useState(initialValues.status);
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...clientRecord };
    setCreated_at(cleanValues.created_at);
    setName(cleanValues.name);
    setBirthdate(cleanValues.birthdate);
    setStatus(cleanValues.status);
    setEmail(cleanValues.email);
    setPassword(cleanValues.password);
    setPhone(cleanValues.phone);
    setErrors({});
  };
  const [clientRecord, setClientRecord] = React.useState(client);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Client, id) : client;
      setClientRecord(record);
    };
    queryData();
  }, [id, client]);
  React.useEffect(resetStateValues, [clientRecord]);
  const validations = {
    created_at: [{ type: "Required" }],
    name: [{ type: "Required" }],
    birthdate: [{ type: "Required" }],
    status: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    password: [{ type: "Required" }],
    phone: [{ type: "Phone" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          created_at,
          name,
          birthdate,
          status,
          email,
          password,
          phone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Client.copyOf(clientRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ClientUpdateForm")}
    >
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={
          created_at && convertToLocal(convertTimeStampToDate(created_at))
        }
        onChange={(e) => {
          const date = new Date(e.target.value);
          if (!(date instanceof Date && !isNaN(date))) {
            setErrors((errors) => ({
              ...errors,
              created_at: "The value must be a valid date",
            }));
            return;
          }
          let value = Number(date);
          if (onChange) {
            const modelFields = {
              created_at: value,
              name,
              birthdate,
              status,
              email,
              password,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name: value,
              birthdate,
              status,
              email,
              password,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Birthdate"
        isRequired={true}
        isReadOnly={false}
        defaultValue={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name,
              birthdate: value,
              status,
              email,
              password,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        defaultValue={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name,
              birthdate,
              status: value,
              email,
              password,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name,
              birthdate,
              status,
              email: value,
              password,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        defaultValue={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name,
              birthdate,
              status,
              email,
              password: value,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        defaultValue={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              name,
              birthdate,
              status,
              email,
              password,
              phone: value,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
