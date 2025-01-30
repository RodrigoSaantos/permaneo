export function VideoPlayer() {  
  return (
    <div className="w-full margin-auto">
      <iframe 
        className="aspect-video border w-full max-w-[720px] m-auto" 
        src={'https://www.youtube.com/embed/3_NyaX3yk1I?autoplay=1'}  
      > 
      </iframe>
    </div>
  )
}