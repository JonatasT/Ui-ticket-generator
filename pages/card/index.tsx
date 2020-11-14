import Box from "@material-ui/core/Box";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { DefaultCard } from "../../src/components/Cards/DefaultCard";
import useStyles from "../../src/styles";
import { Typography } from "@material-ui/core";

export function Card() {
    const classes = useStyles();

    const x = useMotionValue(1000);
    const y = useMotionValue(1000);

    const rotateX = useTransform(y, [0, 2000], [15, -15]);
    const rotateY = useTransform(x, [0, 2000], [-15, 15]);

    function handleMouse(e: any) {
        var rect = e.target.getBoundingClientRect();
        x.set(e.clientX - rect.left); //x position within the element.
        y.set(e.clientY - rect.top); //y position within the element.
    }

    return (
        <Box>
            <Box>
                <Typography variant="h6" className={classes.logoText}>
                    UIT
                    <br/>GEN
                </Typography>
            </Box>
                                
            <Box>
                <motion.div
                style={{
                    height: "100vh",
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                }}
                onMouseMove={handleMouse}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                            perspective: 1000,
                            pointerEvents: "none",
                        }}
                    >
                        <DefaultCard />
                    </motion.div>
                
        
                </motion.div>
            </Box>
        </Box>
    );
}

export default Card;