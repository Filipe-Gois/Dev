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