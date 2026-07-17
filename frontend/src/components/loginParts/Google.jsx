import { Button } from "#components/ui/button";

const Google = () => {
  return (
    <div>
      <div className="flex items-center my-6">
        <div className="border-t border-slate-600 flex-1"></div>
        <span className="text-white m-4">Ou</span>
        <div className="border-t border-slate-600 flex-1"></div>
      </div>
      <div>
        <Button variant="outline" className="w-full h-2/3" onClick={() => {}}>
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://w3.org"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Login com Google
        </Button>
      </div>
    </div>
  );
};

export default Google;
