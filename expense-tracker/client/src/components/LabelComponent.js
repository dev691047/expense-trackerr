function  LabelComponent({data}) {
    if(!data)return<></>
  return (
    <>
    <div className="labels flex justify-between" >
            <div className="flex gap-2"  >
              <div className="w-2 h-2 rounded py-3" style={{background:data.color}}></div>
                <h3 className='text-md'>{data.type ??""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent)+"%"}</h3>
           {/* <div style={{backgroundColor:"data.color",width:"10px",height:"20px",border:"1px solid black"}}></div> */}
        </div>
    </>
       
    
  )
}
export default LabelComponent;