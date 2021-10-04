import { useQuery } from "react-query";

import { Policy } from "packages/core/domain/entities/Policy";


type QueryFn = () => Promise<Array<Policy>>;

const key = "getPolicies";

export function useGetPolicies(queryFn: QueryFn) {
    return useQuery<Policy[], Error>(
        [key],
        () => queryFn(),
        {
            initialData: [],
            retry: false,
        }
    )
}