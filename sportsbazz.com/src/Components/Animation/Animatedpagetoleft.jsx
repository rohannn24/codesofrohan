import { motion } from 'framer-motion'

const animations = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 }
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div 
            variants={animations} 
            initial='initial' 
            animate='animate' 
            exit='exit'
            transition={{duration: 2}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage