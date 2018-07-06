export class PrdResponseBody<T> {
    message: string;
    returnCode: number;
    timestamp: number;
    path: string;
    body: T;
    validationResults: ValidationResultModel[];
}

class ValidationResultModel {
    fieldName: string;
    message: string;
}
