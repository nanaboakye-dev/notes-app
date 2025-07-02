import ratelimit from "../config/upstash.js";

// Middleware to limit repeated requests from the same IP
const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(req.ip);
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later."
            });
        }
        next();
    } catch (error) {
        console.log("Rate limiter error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default rateLimiter;