import useReactRouter from "use-react-router";

function RouterHookSample() {
  const { history, location, match } = useReactRouter;
  console.log({ history, location, match });
  return null;
}
export default RouterHookSample;
