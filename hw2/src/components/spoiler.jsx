import {useState} from 'react';

const Spoiler = ({header="+", open, children}) => {
    const [opened, setState] = useState(open);
    const openSpoiler = () => {
      setState(!opened);
    }

    return (
      <div>
        <div onClick={openSpoiler} style={{cursor: 'pointer'}}>
          {header}
        </div>
        {opened && <div>{children}</div>}
      </div>
    )
}

export default Spoiler;