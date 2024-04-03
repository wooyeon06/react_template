import { useDispatch, useSelector } from "react-redux";
import { loadingSlice } from "./slice";
import { RootState } from "./store";
import { Oval } from "react-loader-spinner";


export function useLoading() {
    const dispatch = useDispatch();

    return {
        showLoading: () => {
            dispatch(loadingSlice.actions.show());
        },
        hideLoading: () => {
            dispatch(loadingSlice.actions.hide());
        },
    };
}


export function Loading({ height = 50, width = 50 }) {
    const loading: boolean = useSelector((state: RootState) => state.loading.loading);
    const dispatch = useDispatch();

    return (
        <div>
            {loading ? (
                <div>
                    {/* <Dimmed> */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Oval color="#4692f1" secondaryColor="#fff" height={height} width={width} />
                    </div>
                    {/* </Dimmed> */}
                </div>
            ) : null}
            {/* 또는 loading이 false일 때 렌더링할 내용을 추가할 수 있습니다. */}
        </div>
    );
}


