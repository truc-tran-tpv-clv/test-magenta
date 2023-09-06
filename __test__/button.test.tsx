import { render } from "@testing-library/react";
import React from "react";

import RootLayout from "@/app/layout";
import { CustomButton } from "@/components/button";

describe("RootLayout", () => {
  it("renders its children", () => {
    const ChildComponent = () => <div>Test child component</div>;

    const Layout: any = (
      <RootLayout>
        <CustomButton />
      </RootLayout>
    );

    const { getByText } = render(<ChildComponent />, {
      container: document.body.append(Layout) as any,
    });
  });
});
