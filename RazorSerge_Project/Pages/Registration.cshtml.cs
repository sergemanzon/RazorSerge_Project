using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Primitives;
using System.Web;

namespace RazorSerge_Project.Pages
{
    public class RegistrationModel : PageModel
    {
        [BindProperty]
        public string st { get; set; }

        public void OnPost()
        {
            if (Request.Form.ContainsKey("submit"))
            {
                st = "<table dir='rtl' border='1'>";
                st += "<tr><th colspan='2'>הפרטים שהתקבלו</th></tr>";

                string uName = HttpUtility.HtmlEncode(Request.Form["uName"]);
                string fName = HttpUtility.HtmlEncode(Request.Form["fName"]);
                string lName = HttpUtility.HtmlEncode(Request.Form["lName"]);
                string mail = HttpUtility.HtmlEncode(Request.Form["email"]);
                string address = HttpUtility.HtmlEncode(Request.Form["address"]);
                string number = HttpUtility.HtmlEncode(Request.Form["number"]);
                string phone = HttpUtility.HtmlEncode(Request.Form["phone"]);
                string prefix = HttpUtility.HtmlEncode(Request.Form["prefix"]);
                string city = HttpUtility.HtmlEncode(Request.Form["city"]);
                string gender = HttpUtility.HtmlEncode(Request.Form["gender"]);
                string yearBorn = HttpUtility.HtmlEncode(Request.Form["yearBorn"]);
                Request.Form.TryGetValue("hobbies", out StringValues hobbies);
                string specialRequests = HttpUtility.HtmlEncode(Request.Form["specialRequests"]);

                st += $"<tr><td>שם משתמש:</td><td>{uName}</td></tr>";
                st += $"<tr><td>שם פרטי:</td><td>{fName}</td></tr>";
                st += $"<tr style='text-align:left'><td>טלפון:</td><td>{prefix} - {phone}</td></tr>";
                st += $"<tr><td>שם משפחה:</td><td>{lName}</td></tr>";
                st += $"<tr><td>דוא\"ל:</td><td>{mail}</td></tr>";
                st += $"<tr><td>מין:</td><td>{gender}</td></tr>";
                st += $"<tr><td>שנת לידה:</td><td>{yearBorn}</td></tr>";
                st += $"<tr><td>עיר:</td><td>{city}</td></tr>";
                st += $"<tr><td>כתובת:</td><td>{address} #{number}</td></tr>";

                // Count and display selected hobbies
                int hobbiesCount = hobbies.Count;
                st += $"<tr><td>עיסוקים:</td><td>";
                foreach (var hobby in hobbies)
                {
                    st += $"{hobby} ";
                }
                st += $"({hobbiesCount} נבחרו)</td></tr>";

                st += $"<tr><td>בקשות מיוחדות:</td><td colspan='2'>{specialRequests}</td></tr>";
                st += "</table>";
            }
        }
    }
}
