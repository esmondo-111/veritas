/*
=============================================================================
BLOCKVOTE - UTILITY FUNCTIONS JAVASCRIPT
=============================================================================

LEARNING OBJECTIVES FOR THIS FILE:
- Understand how to organize reusable utility functions
- Learn about helper functions for common tasks
- Practice data validation and formatting
- See how to create educational modal content
- Understand debugging and logging utilities

DIFFICULTY LEVEL: Beginner to Intermediate

FILE ORGANIZATION:
1. Educational Modal Functions
2. Data Validation Utilities
3. Formatting and Display Helpers
4. Debugging and Logging Tools
5. Browser Compatibility Helpers
6. Performance Utilities

=============================================================================
*/

// =============================================================================
// 1. EDUCATIONAL MODAL FUNCTIONS
// =============================================================================

/**
 * Show educational information about blockchain
 * This function displays helpful information when users click footer links
 * 
 * LEARNING NOTE: Educational content helps users understand the technology
 * We provide clear, simple explanations of complex concepts
 */
function showBlockchainInfo() {
    console.log('📚 Showing blockchain information...');
    
    const content = `
        <h3>What is Blockchain?</h3>
        <p>Blockchain is a revolutionary technology that creates a permanent, unchangeable record of transactions. Think of it like a digital ledger that everyone can see, but no one can alter.</p>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Decentralized:</strong> No single authority controls it</li>
            <li><strong>Transparent:</strong> All transactions are visible to everyone</li>
            <li><strong>Immutable:</strong> Once recorded, data cannot be changed</li>
            <li><strong>Secure:</strong> Protected by advanced cryptography</li>
        </ul>
        
        <h4>How it Works:</h4>
        <ol>
            <li>Someone requests a transaction (like casting a vote)</li>
            <li>The transaction is broadcast to the network</li>
            <li>Network participants validate the transaction</li>
            <li>Once verified, the transaction is recorded in a "block"</li>
            <li>The block is added to the chain, creating a permanent record</li>
        </ol>
        
        <h4>Real-World Applications:</h4>
        <ul>
            <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            <li>Voting systems (like this app!)</li>
            <li>Supply chain tracking</li>
            <li>Digital identity verification</li>
            <li>Smart contracts</li>
        </ul>
        
        <p><em>This voting app demonstrates how blockchain can make voting transparent, secure, and tamper-proof!</em></p>
    `;
    
    showModal(content);
}

/**
 * Show information about why blockchain is good for voting
 * This explains the benefits of blockchain-based voting systems
 */
function showVotingBenefits() {
    console.log('📚 Showing voting benefits information...');
    
    const content = `
        <h3>Why Use Blockchain for Voting?</h3>
        <p>Traditional voting systems have many challenges that blockchain technology can solve:</p>
        
        <h4>Problems with Traditional Voting:</h4>
        <ul>
            <li><strong>Trust Issues:</strong> Voters must trust election officials</li>
            <li><strong>Lack of Transparency:</strong> Vote counting happens behind closed doors</li>
            <li><strong>Potential for Fraud:</strong> Ballots can be lost, stolen, or miscounted</li>
            <li><strong>Expensive:</strong> Requires physical infrastructure and staff</li>
            <li><strong>Slow Results:</strong> Manual counting takes time</li>
            <li><strong>Limited Access:</strong> Difficult for remote or disabled voters</li>
        </ul>
        
        <h4>How Blockchain Solves These Problems:</h4>
        <ul>
            <li><strong>Transparency:</strong> Every vote is recorded publicly and can be verified</li>
            <li><strong>Immutability:</strong> Once cast, votes cannot be changed or deleted</li>
            <li><strong>Decentralization:</strong> No single point of failure or control</li>
            <li><strong>Real-time Results:</strong> Vote counts update automatically</li>
            <li><strong>Cost Effective:</strong> Reduces need for physical infrastructure</li>
            <li><strong>Accessibility:</strong> Voters can participate from anywhere</li>
            <li><strong>Auditability:</strong> Anyone can verify the election results</li>
        </ul>
        
        <h4>Security Features:</h4>
        <ul>
            <li><strong>Cryptographic Security:</strong> Votes are protected by advanced encryption</li>
            <li><strong>One Vote Per Person:</strong> Wallet addresses ensure no double voting</li>
            <li><strong>Anonymous but Verifiable:</strong> Votes are private but can be audited</li>
            <li><strong>Tamper Proof:</strong> Impossible to alter votes after they're cast</li>
        </ul>
        
        <h4>Current Limitations:</h4>
        <ul>
            <li>Requires internet access and technical knowledge</li>
            <li>Blockchain networks can be slow during high usage</li>
            <li>Transaction fees (gas costs) for each vote</li>
            <li>Still developing regulatory frameworks</li>
        </ul>
        
        <p><em>This app demonstrates a simple but powerful blockchain voting system that could revolutionize democracy!</em></p>
    `;
    
    showModal(content);
}

/**
 * Show information about the technology stack used
 * This helps students understand what technologies power the app
 */
function showTechStack() {
    console.log('📚 Showing tech stack information...');
    
    const content = `
        <h3>Technology Stack</h3>
        <p>This voting app is built using modern web technologies and blockchain tools:</p>
        
        <h4>Frontend Technologies:</h4>
        <ul>
            <li><strong>HTML5:</strong> Semantic markup for structure and accessibility</li>
            <li><strong>CSS3:</strong> Modern styling with custom properties and responsive design</li>
            <li><strong>Vanilla JavaScript:</strong> No frameworks - pure JavaScript for learning</li>
            <li><strong>Font Awesome:</strong> Beautiful icons for better user experience</li>
        </ul>
        
        <h4>Blockchain Technologies:</h4>
        <ul>
            <li><strong>Ethereum:</strong> The blockchain platform powering our smart contracts</li>
            <li><strong>Sepolia Testnet:</strong> Test network for safe development and learning</li>
            <li><strong>MetaMask:</strong> Browser wallet for connecting to the blockchain</li>
            <li><strong>Web3 API:</strong> JavaScript interface for blockchain interaction</li>
            <li><strong>Smart Contracts:</strong> Self-executing contracts with voting logic</li>
        </ul>
        
        <h4>Development Tools:</h4>
        <ul>
            <li><strong>Solidity:</strong> Programming language for smart contracts</li>
            <li><strong>Remix IDE:</strong> Online development environment for smart contracts</li>
            <li><strong>Etherscan:</strong> Blockchain explorer for viewing transactions</li>
            <li><strong>Git:</strong> Version control for code management</li>
        </ul>
        
        <h4>Key Concepts Demonstrated:</h4>
        <ul>
            <li><strong>Responsive Design:</strong> Works on desktop, tablet, and mobile</li>
            <li><strong>Progressive Enhancement:</strong> Works without JavaScript (basic functionality)</li>
            <li><strong>Accessibility:</strong> Screen reader friendly and keyboard navigable</li>
            <li><strong>Error Handling:</strong> Graceful handling of network and user errors</li>
            <li><strong>State Management:</strong> Consistent data flow and UI updates</li>
            <li><strong>Asynchronous Programming:</strong> Handling blockchain operations</li>
        </ul>
        
        <h4>Learning Path:</h4>
        <ol>
            <li><strong>Week 1:</strong> HTML, CSS, and basic JavaScript</li>
            <li><strong>Week 2:</strong> Advanced JavaScript and DOM manipulation</li>
            <li><strong>Week 3:</strong> Web3 integration and blockchain concepts</li>
            <li><strong>Week 4:</strong> Smart contract development and deployment</li>
            <li><strong>Week 5:</strong> Testing, debugging, and optimization</li>
        </ol>
        
        <p><em>This project provides hands-on experience with both traditional web development and cutting-edge blockchain technology!</em></p>
    `;
    
    showModal(content);
}

/**
 * Show the modal with provided content
 * @param {string} content - HTML content to display in modal
 * 
 * LEARNING NOTE: Modals are overlay windows that display additional information
 * They're useful for showing detailed content without leaving the current page
 */
function showModal(content) {
    const modal = document.getElementById('info-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        // Set the content
        modalBody.innerHTML = content;
        
        // Show the modal
        modal.style.display = 'flex';
        
        // Focus on modal for accessibility
        modal.focus();
        
        // Add event listener for clicking outside modal
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        console.log('✅ Modal displayed');
    } else {
        console.error('❌ Modal elements not found');
    }
}

/**
 * Close the educational modal
 * This function hides the modal when user is done reading
 */
function closeModal() {
    const modal = document.getElementById('info-modal');
    
    if (modal) {
        modal.style.display = 'none';
        console.log('✅ Modal closed');
    }
}

// =============================================================================
// 2. DATA VALIDATION UTILITIES
// =============================================================================

/**
 * Validate email address format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 * 
 * LEARNING NOTE: Regular expressions (regex) are patterns for matching text
 * This regex checks for basic email format: something@something.something
 */
function isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate that a string is not empty or just whitespace
 * @param {string} str - String to validate
 * @returns {boolean} - True if string has content
 * 
 * LEARNING NOTE: trim() removes whitespace from start and end of string
 * This prevents users from submitting empty or space-only inputs
 */
function isValidString(str) {
    return str && typeof str === 'string' && str.trim().length > 0;
}

/**
 * Validate that a number is within a specific range
 * @param {number} num - Number to validate
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {boolean} - True if number is in range
 * 
 * LEARNING NOTE: Input validation prevents errors and security issues
 * Always validate user input before using it in your application
 */
function isValidNumberInRange(num, min, max) {
    return typeof num === 'number' && 
           !isNaN(num) && 
           num >= min && 
           num <= max;
}

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML string
 * 
 * LEARNING NOTE: XSS (Cross-Site Scripting) attacks inject malicious code
 * Always sanitize user input before displaying it as HTML
 */
function sanitizeHTML(html) {
    if (!html || typeof html !== 'string') {
        return '';
    }
    
    // Create a temporary div element
    const tempDiv = document.createElement('div');
    
    // Set the text content (this automatically escapes HTML)
    tempDiv.textContent = html;
    
    // Return the escaped HTML
    return tempDiv.innerHTML;
}

// =============================================================================
// 3. FORMATTING AND DISPLAY HELPERS
// =============================================================================

/**
 * Format a number with thousands separators
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 * 
 * LEARNING NOTE: toLocaleString() formats numbers according to locale
 * This makes large numbers easier to read (e.g., 1,234,567)
 */
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return '0';
    }
    
    return num.toLocaleString();
}

/**
 * Format a date in a user-friendly way
 * @param {Date} date - Date object to format
 * @returns {string} - Formatted date string
 * 
 * LEARNING NOTE: Different date formats are appropriate for different contexts
 * This function provides a readable format for general use
 */
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Invalid Date';
    }
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('en-US', options);
}

/**
 * Format time elapsed since a given date
 * @param {Date} date - Past date to compare with now
 * @returns {string} - Human-readable time elapsed
 * 
 * LEARNING NOTE: Relative time formatting helps users understand recency
 * "2 minutes ago" is more intuitive than "2024-12-08 10:23:00"
 */
function formatTimeAgo(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Unknown time';
    }
    
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSeconds < 60) {
        return 'Just now';
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    } else {
        return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    }
}

/**
 * Truncate text to a maximum length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis if needed
 * 
 * LEARNING NOTE: Text truncation prevents layout issues with long content
 * Always provide a way for users to see the full text if needed
 */
function truncateText(text, maxLength = 100) {
    if (!text || typeof text !== 'string') {
        return '';
    }
    
    if (text.length <= maxLength) {
        return text;
    }
    
    return text.substring(0, maxLength - 3) + '...';
}

// =============================================================================
// 4. DEBUGGING AND LOGGING TOOLS
// =============================================================================

/**
 * Enhanced logging function with timestamps and categories
 * @param {string} level - Log level (info, warn, error, debug)
 * @param {string} message - Log message
 * @param {any} data - Additional data to log
 * 
 * LEARNING NOTE: Good logging helps with debugging and monitoring
 * Different log levels help filter messages by importance
 */
function log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    
    switch (level.toLowerCase()) {
        case 'error':
            console.error(prefix, message, data);
            break;
        case 'warn':
            console.warn(prefix, message, data);
            break;
        case 'debug':
            console.debug(prefix, message, data);
            break;
        default:
            console.log(prefix, message, data);
    }
}

/**
 * Log application state for debugging
 * This function helps developers understand the current state of the app
 * 
 * LEARNING NOTE: State logging is crucial for debugging complex applications
 * It helps identify where problems occur in the application flow
 */
function logAppState() {
    log('debug', 'Current Application State:', {
        isWalletConnected: AppState.isWalletConnected,
        currentAccount: AppState.currentAccount,
        currentNetwork: AppState.currentNetwork,
        selectedOption: AppState.selectedOption,
        hasUserVoted: AppState.hasUserVoted,
        isLoading: AppState.isLoading,
        transactionInProgress: AppState.transactionInProgress,
        pollOptions: AppState.pollOptions.map(option => ({
            id: option.id,
            name: option.name,
            votes: option.votes
        }))
    });
}

/**
 * Performance timing utility
 * @param {string} label - Label for the timing measurement
 * @returns {Function} - Function to call when operation is complete
 * 
 * LEARNING NOTE: Performance monitoring helps identify slow operations
 * Use this to measure how long blockchain operations take
 */
function startTimer(label) {
    const startTime = performance.now();
    
    return function endTimer() {
        const endTime = performance.now();
        const duration = endTime - startTime;
        log('debug', `Timer [${label}]: ${duration.toFixed(2)}ms`);
        return duration;
    };
}

// =============================================================================
// 5. BROWSER COMPATIBILITY HELPERS
// =============================================================================

/**
 * Check if browser supports required features
 * @returns {Object} - Object with support status for each feature
 * 
 * LEARNING NOTE: Feature detection ensures your app works across browsers
 * Always check for feature support before using advanced APIs
 */
function checkBrowserSupport() {
    return {
        localStorage: typeof Storage !== 'undefined',
        fetch: typeof fetch !== 'undefined',
        promises: typeof Promise !== 'undefined',
        asyncAwait: (function() {
            try {
                eval('(async function() {})');
                return true;
            } catch (e) {
                return false;
            }
        })(),
        web3: typeof window.ethereum !== 'undefined',
        css3: (function() {
            const div = document.createElement('div');
            return 'transform' in div.style;
        })()
    };
}

/**
 * Get browser information for debugging
 * @returns {Object} - Browser information object
 * 
 * LEARNING NOTE: Browser detection helps with debugging user issues
 * Different browsers may behave differently with Web3 operations
 */
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    
    return {
        userAgent: userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        isMetaMaskInstalled: typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask
    };
}

// =============================================================================
// 6. PERFORMANCE UTILITIES
// =============================================================================

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 * 
 * LEARNING NOTE: Debouncing prevents functions from being called too frequently
 * Useful for search inputs, resize events, and API calls
 */
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear the previous timeout
        clearTimeout(timeoutId);
        
        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Throttle function to limit function calls to once per time period
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 * 
 * LEARNING NOTE: Throttling ensures functions run at most once per time period
 * Useful for scroll events, mouse movements, and frequent updates
 */
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Simple cache implementation for expensive operations
 * @param {Function} func - Function to cache results for
 * @param {number} maxAge - Maximum age of cached results in milliseconds
 * @returns {Function} - Cached function
 * 
 * LEARNING NOTE: Caching prevents redundant expensive operations
 * Useful for blockchain reads that don't change frequently
 */
function createCache(func, maxAge = 60000) { // Default 1 minute
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        const cached = cache.get(key);
        
        if (cached && (Date.now() - cached.timestamp) < maxAge) {
            log('debug', 'Cache hit for:', key);
            return cached.result;
        }
        
        const result = func.apply(this, args);
        cache.set(key, {
            result: result,
            timestamp: Date.now()
        });
        
        log('debug', 'Cache miss for:', key);
        return result;
    };
}

// =============================================================================
// 7. LOCAL STORAGE UTILITIES
// =============================================================================

/**
 * Safely get item from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} - Stored value or default
 * 
 * LEARNING NOTE: localStorage can fail in private browsing mode
 * Always handle storage errors gracefully
 */
function getStorageItem(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        log('warn', 'Failed to get storage item:', { key, error });
        return defaultValue;
    }
}

/**
 * Safely set item in localStorage
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @returns {boolean} - True if successful
 * 
 * LEARNING NOTE: localStorage has size limits and can fail
 * Always check if storage operations succeed
 */
function setStorageItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        log('warn', 'Failed to set storage item:', { key, error });
        return false;
    }
}

/**
 * Remove item from localStorage
 * @param {string} key - Storage key to remove
 * @returns {boolean} - True if successful
 */
function removeStorageItem(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        log('warn', 'Failed to remove storage item:', { key, error });
        return false;
    }
}

/*
=============================================================================
EDUCATIONAL NOTES FOR STUDENTS:

1. UTILITY FUNCTIONS:
   - Break complex operations into small, reusable functions
   - Each function should do one thing well
   - Use descriptive names that explain what the function does
   - Always validate inputs and handle errors

2. DATA VALIDATION:
   - Never trust user input - always validate
   - Use regular expressions for pattern matching
   - Sanitize data before displaying to prevent security issues
   - Provide helpful error messages for invalid input

3. PERFORMANCE OPTIMIZATION:
   - Use debouncing and throttling for frequent events
   - Cache expensive operations when possible
   - Monitor performance with timing utilities
   - Optimize for the most common use cases

4. BROWSER COMPATIBILITY:
   - Check for feature support before using APIs
   - Provide fallbacks for unsupported features
   - Test across different browsers and devices
   - Use progressive enhancement principles

5. DEBUGGING AND LOGGING:
   - Use structured logging with different levels
   - Log important state changes and errors
   - Include timestamps and context in logs
   - Remove debug logs in production

6. CODE ORGANIZATION:
   - Group related functions together
   - Use consistent naming conventions
   - Document complex functions with comments
   - Keep functions small and focused
=============================================================================
*/
