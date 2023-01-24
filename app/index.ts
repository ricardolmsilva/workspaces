import { sharedVariable } from "shared";

// This works
const appVariable = sharedVariable;

// Doesn't work
import { variableToShare } from "shared/nestedFolder/variableToShare";
const appVariable2 = variableToShare;
