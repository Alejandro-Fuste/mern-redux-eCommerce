import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

import { QUERY_CHECKOUT } from "../../utils/queries";
