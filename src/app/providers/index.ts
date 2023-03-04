import compose from "compose-function";

import { withChakra } from "./withChakra";
import { withQuery } from "./withQuery";

export const withProviders = compose(withQuery, withChakra);