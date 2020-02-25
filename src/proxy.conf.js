const PROXY_CONFIG = [
    {
        context: '/admin',
        target: 'http://127.0.0.1:8000/seven',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'admin' : ''}
        
    
    }

];

module.exports = PROXY_CONFIG;