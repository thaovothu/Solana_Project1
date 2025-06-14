// //<aside> và <figure>
// import React, {FC} from 'react'

// const Branding:FC  = ({image,title,message}) => {
//   return (
//   // <div className="ps-4 hidden py-4 lg:block">
//   //   <div className="relative h-full w-full overflow-hidden rounded-xl">
//   //     <img src={ `assets/images/ai/${image}.jpg`} alt="" className="h-full w-ful -scale-x-100 transform" />
//   //     <div className="bg-default-950/40 absolute inset-0">
//   //       <div className="flex h-full items-end justify-center">
//   //         <h5 className="mb-3 text-xl font-bold text-white">
//   //           Solana Token Creator <br />
//   //           {title}
//   //         </h5>
//   //         <p className="text-default-400 text-base font-medium">
//   //           {message}
//   //         </p>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </div>
//   <aside className="ps-4 hidden py-4 lg:block" aria-label="Visual token branding">
//   <figure className="relative h-full w-full overflow-hidden rounded-xl">
//     <img
//       src={`assets/images/ai/${image}.jpg`}
//       alt={`Visual of ${title}`}
//       className="h-full w-full -scale-x-100 transform object-cover"
//     />
//     <figcaption className="bg-default-950/40 absolute inset-0">
//       <div className="flex h-full flex-col items-center justify-end p-4 text-center">
//         <h5 className="mb-2 text-xl font-bold text-white">
//           Solana Token Creator <br />
//           {title}
//         </h5>
//         <p className="text-default-400 text-base font-medium">{message}</p>
//       </div>
//     </figcaption>
//   </figure>
// </aside>

//   );
// }

// export default Branding;

//<aside> và <figure>
import React, {FC} from 'react'

const Branding: FC = ({ image, title, message }) => {
  return (
    <aside className="ps-4 hidden py-4 lg:block" aria-label="Hình ảnh thương hiệu token">
      <figure className="relative h-full w-full overflow-hidden rounded-xl">
        <img
          src={`assets/images/ai/${image}.jpg`}
          alt={`Illustration for ${title}`}
          className="h-full w-full -scale-x-100 transform object-cover"
        />
        <figcaption className="bg-default-950/40 absolute inset-0">
          <div className="flex h-full flex-col items-center justify-end p-4 text-center">
            <h5 className="mb-2 text-xl font-bold text-white">
              Solana Token Creator <br />
              {title}
            </h5>
            <p className="text-default-400 text-base font-medium">{message}</p>
          </div>
        </figcaption>
      </figure>
    </aside>
  );
}

export default Branding;