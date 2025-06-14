import React, {FC} from 'react'
interface InputViewProps {
  name: string;
  placeholder?: string;
  clickhandle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  itemProp?: string; // <- thêm dòng này
}

export const InputView: React.FC<InputViewProps> = ({ placeholder, name, clickhandle, itemProp }) => {

  return (
  //  <div className="mb-4">
  //     <label htmlFor="input-label" className="text-base/normal
  //     text-default-200 mb-2 block font-semibold">
  //       {name}
  //     </label>
  //     <input 
  //       type="text"
  //       id="input-label"
  //       onChange={clickhandle}
  //       placeholder={placeholder}
  //       className="border-default-200 block w-full rounded border-white/10
  //       bg-transparent py-1.5 px-3 text-white/80 focus: border-white.25
  //       focus:ring-transparent"
  //     ></input>
  //  </div>
  <div className="mb-4" itemScope itemType="https://schema.org/PropertyValue">
  <label
    htmlFor="input-label"
    className="text-base/normal text-default-200 mb-2 block font-semibold"
    itemProp="name"
  >
    {name}
  </label>
  <input
    type="text"
    id="input-label"
    onChange={clickhandle}
    placeholder={placeholder}

    itemProp={itemProp}   
    className="border-default-200 block w-full rounded border-white/10
      bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
      focus:ring-transparent"
  />
</div>

  );
};

