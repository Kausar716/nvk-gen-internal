import Loader from "react-loader-spinner";
const LoaderComp = ()=>{
      
    return(
        <Loader
        type="TailSpin"
        color="rgb(155, 236, 34)"
        height={30}
        width={30}
        timeout={400} 
        />
          
    );
}
export default LoaderComp;