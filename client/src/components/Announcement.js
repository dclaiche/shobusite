import React from 'react'
import {AnimatePresence, motion} from 'framer-motion';


const Announcement = (props) => {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <h3>{props.children}</h3>
            </motion.div>
        </AnimatePresence>
    )
}

export default Announcement;