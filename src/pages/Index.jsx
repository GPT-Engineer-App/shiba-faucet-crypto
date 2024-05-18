import { useState } from "react";
import { FaDog, FaEthereum, FaFaucet } from "react-icons/fa";

const Index = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleRequestTokens = async () => {
    setLoading(true);
    // Simulate a transaction hash for demonstration purposes
    setTimeout(() => {
      setTransactionHash("0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <FaDog className="text-4xl text-yellow-500" />
          <h1 className="text-3xl font-bold ml-2">Shiba Inu Faucet</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="walletAddress">
            Wallet Address
          </label>
          <input type="text" id="walletAddress" value={walletAddress} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your wallet address" />
        </div>
        <button onClick={handleRequestTokens} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center" disabled={loading}>
          {loading ? (
            <div className="flex items-center">
              <FaFaucet className="animate-spin mr-2" />
              Requesting...
            </div>
          ) : (
            <div className="flex items-center">
              <FaEthereum className="mr-2" />
              Request Tokens
            </div>
          )}
        </button>
        {transactionHash && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <p>Transaction successful!</p>
            <p>Transaction Hash:</p>
            <p className="break-words">{transactionHash}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
