import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ButtonShapeTabs from "./tabMenu";

export function Header() {
  return (
    <div className="flex items-center justify-between w-full flex-col px-8 pt-8 ">
      <div className="w-full max-w-3xl">
        <div>
          <div>
            <Avatar className="w-14 h-14">
              <AvatarImage
                src="https://github.com/betolarbac.png"
                alt="@betolarbac"
              />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
              Roberto Cabral
            </h1>
            <p className="text-gray-500">Front-end engineer and QA Engineer </p>

            <div className="flex flex-row justify-between items-center mt-6">
              <div className="flex flex-row gap-x-3">
                <a href="https://github.com/betolarbac">
                  <GitHubLogoIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/roberto-larbac/">
                  <LinkedInLogoIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-b w-full my-8"></div>
          <ButtonShapeTabs />
        </div>
      </div>
    </div>
  );
}
