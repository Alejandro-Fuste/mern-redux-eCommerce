import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { UPDATE_PRODUCTS } from "../../utils/actions";
