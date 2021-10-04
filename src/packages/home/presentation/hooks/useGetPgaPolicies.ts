import { useQuery, UseQueryResult } from "react-query";
import { Policy } from "packages/core/domain/entities/Policy";

type QueryFn = () => Promise<Array<Policy>>;

export function useGetPgaPolicies(
    queryFn: QueryFn
): UseQueryResult<Array<Policy>> {
    const key = Symbol("getPolicies");

    return useQuery<Policy[], Error>([key], () => queryFn(), {
        initialData: [],
        retry: false,
        refetchOnWindowFocus: false,
    });
}
