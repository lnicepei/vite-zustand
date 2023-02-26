import compose from "compose-function";

import { withQuery } from "./withQuery";

export const withProviders = compose(withQuery);
