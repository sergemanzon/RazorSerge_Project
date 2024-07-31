using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorSerge_Project.Pages
{
    public class MultBoardModel : PageModel
    {
        [BindProperty]
        public string Num { get; set; } // Property to bind form input

        public string St { get; set; } // Property to hold the generated table HTML

        public void OnGet()
        {
            // Default behavior, no table if no form submission
            St = string.Empty;
        }

        public void OnPostGenerateTable()
        {
            int num;

            if (int.TryParse(Num, out num) && num > 0)
            {
                St = "<table border='1' class='table table-bordered'>";

                // Create header row
                St += "<tr class='header-row'>";
                St += "<th></th>"; // Top-left corner cell
                for (int i = 1; i <= num; i++)
                {
                    St += $"<th>{i}</th>"; // Header cells
                }
                St += "</tr>";

                for (int i = 1; i <= num; i++)
                {
                    St += "<tr>";
                    St += $"<th>{i}</th>"; // Leftmost column header
                    for (int j = 1; j <= num; j++)
                    {
                        // Apply class to the last column cell
                        string cellClass = j == num ? "rightmost-column" : "";
                        St += $"<td class='{cellClass}'>{i * j}</td>";
                    }
                    St += "</tr>";
                }

                St += "</table>";
            }
            else
            {
                St = "<p style='color: red;'>Please enter a valid number greater than 0.</p>";
            }
        }
    }
}
