import { render } from "@testing-library/svelte"
import StatusBar from "../Hello.svelte"

describe("Hello component", () => {

	it("should show message", async () => {
		const { getByText } = render(StatusBar)

        expect(getByText("Hello")).toBeInTheDocument()
	})
})
