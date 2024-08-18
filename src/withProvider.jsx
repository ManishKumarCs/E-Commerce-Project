import {useContext} from "react";
import {alertContext, userContext, cartContext} from "./Contexts";

const withProvider = (provider) => (IncomingComponent) => (props) => {
      const contextData = useContext(provider);
      return <IncomingComponent {...props} {...contextData}/>
}
export default withProvider;

export const withAlert = withProvider(alertContext);
export const withUser = withProvider(userContext);
export const withCart = withProvider(cartContext);

