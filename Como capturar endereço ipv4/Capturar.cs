static string GetIpv4()
{
    var host = Dns.GetHostEntry(Dns.GetHostName());


    foreach (var ip in host.AddressList)
    {
        if (ip == host.AddressList[6])
        {
            return ip.ToString();
        }
    }
    throw new Exception("No network adapters with an IPv4 address in the system!");
}



//rascunho

// using System;
// using System.Net;
// using System.Net.NetworkInformation;
// using System.Net.Sockets;


// static string GetIpv4()
// {
//     var host = Dns.GetHostEntry(Dns.GetHostName());


//     foreach (var ip in host.AddressList)
//     {
//         if (ip == host.AddressList[6])
//         {
//             return ip.ToString();
//         }
//     }
//     throw new Exception("No network adapters with an IPv4 address in the system!");
// }

// var host = Dns.GetHostEntry(Dns.GetHostName());

// foreach (var ip in host.AddressList)
// {
//     if (ip == host.AddressList[6]) Console.WriteLine(ip);


// }

// Console.WriteLine(host.AddressList[0]);



// Console.WriteLine(GetIpv4());
// Console.WriteLine(Dns.GetHostEntry(Dns.GetHostName()).AddressList[3]);