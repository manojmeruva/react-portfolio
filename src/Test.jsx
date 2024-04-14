import React, { useState } from 'react';
import { delay, motion } from 'framer-motion';

function Test() {

    const [open, setOpen] = useState(false);

    const list = ["item1","item2","item3","item4"];

    const variants = {
        visible: (i) => ({opacity:1, 
        x:100,
        transition:{delay: i * 0.3}
    }),
        hidden: {opacity:0}
    }
  return (
    <div className='course'>
        <motion.ul initial="hidden" animate="visible" className="box" variants={variants}>
        {list.map((item,i) => (
            <motion.li variants={variants} key={item} custom={i}>
                {item}
            </motion.li>
        ))}
        </motion.ul>
    </div>
  )
}

export default Test