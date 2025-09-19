export type JsonSchemaType = | "string" | "number" | "integer" | "object" | "array" | "boolean" | "null" | (string[]);

export type JsonSchema<T> = {
  type: JsonSchemaType;
  properties?: {
    [key in keyof T]: JsonSchema<T[key]>;
  };
  required?: (keyof T)[];
  items?: JsonSchema<T extends (infer U)[] ? U : unknown>;
};
